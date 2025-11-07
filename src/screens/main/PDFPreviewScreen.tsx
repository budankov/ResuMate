import Handlebars from 'handlebars';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { generatePDF } from 'react-native-html-to-pdf';
import Share from 'react-native-share';
import { s, vs } from 'react-native-size-matters';
import { WebView } from 'react-native-webview';
import cvData from '../../assets/cv-json-example/frontend-cv-schema.json';
import AddButton from '../../components/buttons/AddButton';
import { colors } from '../../styles/colors';

// templates
import { template1 } from '../../assets/cv-templates/template-1';
import { template2 } from '../../assets/cv-templates/template-2';
import { template3 } from '../../assets/cv-templates/template-3';
import { template4 } from '../../assets/cv-templates/template-4';
import { template5 } from '../../assets/cv-templates/template-5';
import { template6 } from '../../assets/cv-templates/template-6';

const templates = [
  { id: 1, template: template1 },
  { id: 2, template: template2 },
  { id: 3, template: template3 },
  { id: 4, template: template4 },
  { id: 5, template: template5 },
  { id: 6, template: template6 },
];

// ✅ Handlebars helper
Handlebars.registerHelper('join', function (arr, separator) {
  return Array.isArray(arr)
    ? arr.join(typeof separator === 'string' ? separator : ', ')
    : '';
});

// ✅ Обгортка HTML із масштабом
const wrapHtml = (html: string, scale = 0.4) => `
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=${scale}, maximum-scale=${scale}, user-scalable=no" />
      <style>
        body {
          margin: 0;
          padding: 0;
          transform-origin: top left;
          transform: scale(${scale});
          overflow: hidden;
          background: #fff;
        }
      </style>
    </head>
    <body>${html}</body>
  </html>
`;

export default function PDFPreviewScreen() {
  const [filledTemplates, setFilledTemplates] = useState<
    { id: number; html: string }[]
  >([]);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const { width, height } = Dimensions.get('window');

  // 🧩 Генеруємо шаблони з даними
  useEffect(() => {
    setFilledTemplates(
      templates.map(t => ({
        id: t.id,
        html: Handlebars.compile(t.template)(cvData),
      })),
    );
  }, []);

  // 📤 Шаринг PDF без збереження у пам’ять
  const handleShare = async () => {
    if (!selectedTemplate) return;
    try {
      const file = await generatePDF({
        html: selectedTemplate.html,
        fileName: `resume_${selectedTemplate.id}`,
        directory: 'Documents',
        base64: false,
      });

      await Share.open({
        title: 'Поділитися резюме',
        url: `file://${file.filePath}`,
        type: 'application/pdf',
        failOnCancel: false,
      });
    } catch (err) {
      console.error('Помилка при шарингу:', err);
      Alert.alert('Помилка', 'Не вдалося поділитися PDF');
    }
  };

  if (filledTemplates.length === 0) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#333" />
        <Text style={{ marginTop: 10 }}>Генерація шаблонів...</Text>
      </View>
    );
  }

  return (
    <View style={styles.previewRoot}>
      {/* 🧾 Сітка шаблонів */}
      <FlatList
        data={filledTemplates}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedTemplate({ id: item.id, html: item.html });
              setModalVisible(true);
            }}
          >
            <WebView
              originWhitelist={['*']}
              source={{ html: wrapHtml(item.html, 0.3) }}
              style={styles.previewWebView}
            />
            <Text style={styles.templateLabel}>Шаблон {item.id}</Text>
          </TouchableOpacity>
        )}
      />

      {/* 🔍 Модалка перегляду */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Pressable
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeText}>Закрити</Text>
          </Pressable>

          {selectedTemplate && (
            <WebView
              originWhitelist={['*']}
              source={{ html: wrapHtml(selectedTemplate.html, 0.5) }}
              style={{ flex: 1, width, height }}
            />
          )}

          {/* 📤 Кнопка "Поділитися" */}
          {selectedTemplate && (
            <View style={styles.shareContainer}>
              <AddButton title="Поділитися" isReload onPress={handleShare} />
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  previewRoot: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: colors.primary,
  },
  columnWrapper: {
    justifyContent: 'space-around',
    marginBottom: 20,
    gap: 20,
  },
  previewWebView: {
    width: 150,
    height: 212,
    borderRadius: 8,
    overflow: 'hidden',
  },
  templateLabel: {
    textAlign: 'center',
    marginTop: 6,
    color: colors.fonts,
    fontWeight: '600',
  },
  modalContainer: { flex: 1, backgroundColor: colors.primary },
  closeButton: { padding: 12, alignSelf: 'flex-end' },
  closeText: { fontSize: 16, color: colors.fonts, paddingTop: 40 },
  shareContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: s(14),
    paddingVertical: vs(10),
    backgroundColor: colors.primary,
  },
});

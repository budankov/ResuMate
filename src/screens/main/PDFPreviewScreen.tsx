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
import RNFS from 'react-native-fs';
import { generatePDF } from 'react-native-html-to-pdf';
import Pdf from 'react-native-pdf';

import cvData from '../../assets/cv-json-example/frontend-cv-schema.json';
import { template1 } from '../../assets/cv-templates/template-1';

Handlebars.registerHelper('join', function (arr, separator) {
  if (Array.isArray(arr)) {
    return arr.join(typeof separator === 'string' ? separator : ', ');
  }
  return '';
});

export default function PDFPreviewScreen() {
  const [pdfPath, setPdfPath] = useState<string | null>(null);
  const [pagesCount, setPagesCount] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { width, height } = Dimensions.get('window');
  const thumbWidth = Math.min(width * 0.8, 720);
  const thumbHeight = thumbWidth * 1.414;

  useEffect(() => {
    const generate = async () => {
      try {
        const compiled = Handlebars.compile(template1);
        const filledHtml = compiled(cvData);

        const file = await generatePDF({
          html: filledHtml,
          fileName: 'resume_preview',
          directory: 'Documents',
          base64: false,
        });

        console.log('PDF generated at:', file.filePath);

        const exists = await RNFS.exists(file.filePath);
        console.log('PDF exists?', exists);

        if (exists) {
          setPdfPath(file.filePath);
        } else {
          Alert.alert('Помилка', 'Файл PDF не знайдено після генерації');
        }
      } catch (err) {
        console.error('Помилка генерації PDF:', err);
        Alert.alert('Помилка', 'Не вдалося згенерувати PDF');
      }
    };

    generate();
  }, []);

  if (!pdfPath) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#333" />
      </View>
    );
  }

  const fileUri = pdfPath.startsWith('file://') ? pdfPath : `file://${pdfPath}`;

  return (
    <View style={styles.previewRoot}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setModalVisible(true)}
        style={styles.thumbWrapper}
      >
        <Pdf
          source={{ uri: fileUri, cache: true }}
          page={1}
          onLoadComplete={n => setPagesCount(n)}
          style={[styles.thumbnail, { width: thumbWidth, height: thumbHeight }]}
        />
      </TouchableOpacity>

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

          {pagesCount > 0 ? (
            <FlatList
              data={Array.from({ length: pagesCount }, (_, i) => i + 1)}
              keyExtractor={item => String(item)}
              horizontal
              pagingEnabled
              initialNumToRender={3}
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={ev => {
                const page =
                  Math.round(ev.nativeEvent.contentOffset.x / width) + 1;
                setCurrentPage(page);
              }}
              renderItem={({ item }: { item: number }) => (
                <View style={{ width, height }}>
                  <Pdf
                    source={{ uri: fileUri, cache: true }}
                    page={item}
                    scale={1}
                    style={{ width, height }}
                  />
                </View>
              )}
            />
          ) : (
            <View style={styles.center}>
              <ActivityIndicator size="large" color="#333" />
            </View>
          )}
        </View>
      </Modal>
      {pagesCount > 0 && (
        <View style={styles.pageIndicator} pointerEvents="none">
          <Text style={styles.pageIndicatorText}>
            {currentPage} / {pagesCount}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  pdf: { flex: 1, borderWidth: 1, borderColor: '#fff' },
  previewRoot: { alignItems: 'center', paddingVertical: 12 },
  thumbWrapper: {
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  thumbnail: { borderWidth: 1, borderColor: '#eee', backgroundColor: '#fff' },
  modalContainer: { flex: 1, backgroundColor: '#fff' },
  closeButton: { padding: 12, alignSelf: 'flex-end' },
  closeText: { fontSize: 16, color: '#333', paddingTop: 40 },
  pageIndicator: {
    position: 'absolute',
    top: 48,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  pageIndicatorText: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
});

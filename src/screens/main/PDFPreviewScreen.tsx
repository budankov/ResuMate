import Handlebars from 'handlebars';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  StyleSheet,
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
  const { width, height } = Dimensions.get('window');

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
          // 👇 для тесту можна розкоментувати
          // await Linking.openURL(`file://${file.filePath}`);
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

  return (
    <View style={styles.container}>
      <Pdf
        source={{
          uri: pdfPath.startsWith('file://') ? pdfPath : `file://${pdfPath}`,
          cache: true,
        }}
        onLoadComplete={(numberOfPages, filePath) =>
          console.log('PDF loaded, pages:', numberOfPages, 'path:', filePath)
        }
        onLoadProgress={percent => console.log('PDF load progress:', percent)}
        onError={error => {
          console.log('PDF view error:', error);
          Alert.alert('PDF error', JSON.stringify(error));
        }}
        onPageChanged={(page, numberOfPages) =>
          console.log(`PDF page ${page} of ${numberOfPages}`)
        }
        // Увімкнемо трохи більший початковий масштаб, щоб сторінки виглядали крупніше
        scale={1.25}
        minScale={1}
        maxScale={3}
        // зменшимо відступ між сторінками
        spacing={8}
        // вимкнемо paging, щоб можна було скролити вгору/вниз (false — за замовчуванням)
        enablePaging={false}
        style={[styles.pdf, { width, height }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  pdf: { flex: 1, borderWidth: 1, borderColor: 'rgba(0,0,0,0.06)' },
});

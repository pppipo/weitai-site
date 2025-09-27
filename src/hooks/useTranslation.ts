import { useLanguage } from '@/contexts/LanguageContext';

// 翻译函数类型
type TranslationFunction = (key: string, fallback?: string) => string;

// 获取嵌套对象的值
function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.');
  let current: unknown = obj;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return '';
    }
  }
  
  return typeof current === 'string' ? current : '';
}

// useTranslation Hook
export function useTranslation() {
  const { messages } = useLanguage();

  // 翻译函数
  const t: TranslationFunction = (key: string, fallback?: string) => {
    const translation = getNestedValue(messages as unknown as Record<string, unknown>, key);
    
    if (translation) {
      return translation;
    }
    
    // 如果没有找到翻译，返回fallback或key本身
    return fallback || key;
  };

  return { t };
}
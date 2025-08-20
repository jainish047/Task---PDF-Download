import { Entry } from "@/types/entry";

export default function Card({ entry }: { entry: Entry }) {
  return (
    <div style={{
      backgroundColor: '#0a0a0a',
      color: '#ededed',
      fontFamily: 'Arial, sans-serif',
      padding: '0.75rem',
      borderRadius: '0.375rem',
      height: '100%'
    }}>
      <div
        style={{
          fontWeight: '600',
          textAlign: 'justify',
          marginBottom: '0.5rem',
          fontSize: '1rem',
          lineHeight: '1.5'
        }}
        dangerouslySetInnerHTML={{ __html: entry.htmlQuestion }}
      />
      <hr style={{
        borderColor: '#4b5563',
        margin: '0.5rem 0',
        borderWidth: '1px 0 0 0'
      }} />
      <div
        style={{
          textAlign: 'justify',
          lineHeight: '1.6',
          fontSize: '0.875rem'
        }}
        dangerouslySetInnerHTML={{ __html: entry.htmlAnswer }}
      />
    </div>
  );
}
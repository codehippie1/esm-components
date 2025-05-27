import React from 'react';

export default function FancyButton({ text = "Click me!" }) {
  return (
    <button style={{
      backgroundColor: '#0070f3',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '6px',
      fontSize: '16px'
    }}>
      {text}
    </button>
  );
}

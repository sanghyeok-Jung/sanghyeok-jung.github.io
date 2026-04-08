import React from 'react';
import Box from '@mui/material/Box';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
// import 'github-markdown-css' directly (handles dark/light modes usually). 
// We will enforce a dark mode styling container regardless.
import 'github-markdown-css/github-markdown.css';
import resumeContent from '../resume.md?raw';

export default function App() {
  // Pre-process the markdown to fix image paths.
  // Images like `./public/resources/...` need to become `/resources/...`
  // so that Vite can correctly serve them from its public directory.
  const processedContent = resumeContent
    .replace(/\.\/public\/resources\//g, '/resources/');

  return (
    <Box 
      sx={{ 
        width: '100%', 
        minHeight: '100vh', 
        // GitHub Dark Theme background colors
        backgroundColor: '#0d1117', 
        pt: 6, 
        pb: 12 
      }}
    >
      <Box 
        className="markdown-body" 
        data-theme="dark"
        sx={{ 
          maxWidth: '1000px', 
          mx: 'auto', 
          p: { xs: 3, md: 6 }, 
          // Enforce dark mode specific colors on the markdown container
          backgroundColor: '#0d1117', 
          color: '#c9d1d9',
          borderRadius: '12px', 
          boxShadow: '0 8px 24px rgba(0,0,0,0.8)',
          border: '1px solid #30363d',
          '& img': {
            borderRadius: '8px',
            border: '1px solid #30363d',
            boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
          }
        }}
      >
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {processedContent}
        </ReactMarkdown>
      </Box>
    </Box>
  );
}

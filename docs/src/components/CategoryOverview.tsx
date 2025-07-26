import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';

interface CategoryOverviewProps {
  categoryPath: string;
  excludeFiles?: string[];
}

export default function CategoryOverview({ 
  categoryPath, 
  excludeFiles = ['00-overview.md', '_category_.json'] 
}: CategoryOverviewProps) {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();
  
  // This would need to be populated with actual file data
  // For now, we'll create a static list based on the known files
  const getFilesForCategory = (path: string) => {
    const fileMap: Record<string, string[]> = {
      'elements/dynamic-elements': [
        'accordion.md',
        'advanced-menu.md',
        'alert.md',
        'before-after.md',
        'carousel.md',
        'copy-to-clipboard.md',
        'countdown.md',
        'hotspot.md',
        'lightbox.md',
        'map.md',
        'modal.md',
        'off-canvas.md',
        'read-more.md',
        'slide-menu.md',
        'star-rating.md',
        'switch.md',
        'table-of-contents.md',
        'table.md',
        'tabs.md',
        'tooltip.md'
      ]
    };
    
    return fileMap[path] || [];
  };

  const files = getFilesForCategory(categoryPath);
  const filteredFiles = files.filter(file => !excludeFiles.includes(file));
  
  // Keep only the filtered files (excluding index.md)
  const allFiles = filteredFiles;

  const formatTitle = (filename: string) => {
    return filename
      .replace('.md', '')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="category-overview">
      <h2>Available Elements</h2>
      <div className="category-grid">
        {allFiles.map((file) => (
          <div key={file} className="category-item">
            <a href={`/elements/dynamic-elements/${file.replace('.md', '')}`} className="category-link">
              {formatTitle(file)}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
} 
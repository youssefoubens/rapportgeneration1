import React from 'react';

interface TemplateSelectorProps {
  selected: string;
  onSelect: (template: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ selected, onSelect }) => {
  const templates = [
    { id: 'academic', name: 'Academic Report' },
    { id: 'business', name: 'Business Report' },
    { id: 'technical', name: 'Technical Documentation' },
  ];

  return (
    <div className="template-selector">
      {templates.map((template) => (
        <div 
          key={template.id}
          className={`template-option ${selected === template.id ? 'selected' : ''}`}
          onClick={() => onSelect(template.id)}
        >
          {template.name}
        </div>
      ))}
    </div>
  );
};

export default TemplateSelector;
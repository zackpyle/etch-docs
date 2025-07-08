---
title: Dynamic Data in Components
sidebar_position: 40
---

# Dynamic Data in Components

Components are the building blocks of dynamic content in Etch. They allow you to create reusable UI elements that automatically display content from your WordPress data sources.

## What Are Dynamic Components?

Dynamic components are reusable UI elements that can display different content based on the data they receive. Instead of creating static components with hardcoded content, dynamic components can adapt and display content from your WordPress data sources.

Think of dynamic components as smart, flexible building blocks that know how to display different types of content while maintaining consistent styling and structure.

## How Dynamic Components Work

### 1. **Component Structure**
You create a component with placeholders for dynamic content (like titles, images, descriptions, etc.).

### 2. **Data Binding**
You connect the component to specific data fields from your WordPress sources.

### 3. **Content Population**
When the component is used, it automatically pulls and displays the appropriate content for that context.

### 4. **Reusability**
The same component can display different content in different contexts (loops, templates, etc.).

## Component Examples

### **Service Card Component**
A reusable card that displays service information:

- **Title**: Service name (from WordPress)
- **Description**: Service description (from WordPress)
- **Image**: Service featured image (from WordPress)
- **Button**: "Learn More" link to service page
- **Price**: Service pricing (if applicable)

This component can be used in:
- Service listing pages
- Homepage service highlights
- Related services sections
- Service category pages

### **Blog Post Card Component**
A card for displaying blog post previews:

- **Title**: Post title (from WordPress)
- **Excerpt**: Post excerpt (from WordPress)
- **Featured Image**: Post image (from WordPress)
- **Date**: Publication date (from WordPress)
- **Author**: Post author (from WordPress)
- **Read More**: Link to full post

### **Product Card Component**
A card for displaying product information:

- **Product Image**: Product photo (from WooCommerce)
- **Product Name**: Product title (from WooCommerce)
- **Price**: Product pricing (from WooCommerce)
- **Rating**: Product reviews (from WooCommerce)
- **Add to Cart**: Purchase button (from WooCommerce)

## Benefits of Dynamic Components

### **Consistency**
All instances of a component maintain the same structure and styling, ensuring brand consistency.

### **Efficiency**
Create once, use everywhere. No need to recreate similar UI elements.

### **Maintainability**
Update the component once and all instances are automatically updated.

### **Flexibility**
The same component can display different content in different contexts.

### **Performance**
Components are optimized for performance and can be cached effectively.

## Creating Dynamic Components

### **Step 1: Design Your Component**
1. Plan the structure and layout of your component
2. Identify which elements will be dynamic
3. Design the component in Etch's visual editor

### **Step 2: Add Dynamic Fields**
1. Add dynamic data fields to your component
2. Connect fields to appropriate WordPress data sources
3. Set up fallback content for when data is missing

### **Step 3: Configure Display Logic**
1. Set up conditional logic for optional content
2. Configure responsive behavior
3. Set up any interactive elements

### **Step 4: Test and Optimize**
1. Test with various data scenarios
2. Optimize for performance
3. Ensure accessibility compliance

## Component Best Practices

### **Keep Components Focused**
Each component should have a single, clear purpose. Don't try to make one component do everything.

### **Use Semantic Structure**
Structure your components with proper HTML semantics for better accessibility and SEO.

### **Plan for Edge Cases**
Consider what happens when data is missing, incomplete, or in unexpected formats.

### **Optimize for Performance**
Use efficient data queries and consider lazy loading for images and heavy content.

### **Test Across Contexts**
Test your components in different contexts (loops, templates, standalone) to ensure they work correctly.

## Advanced Component Features

### **Conditional Display**
Show or hide elements based on data availability or specific conditions.

### **Dynamic Styling**
Apply different styles based on content or context.

### **Interactive Elements**
Add hover effects, click handlers, and other interactive features.

### **Responsive Design**
Ensure components look great on all device sizes.

## Next Steps

Now that you understand dynamic components, learn how to create and configure them in Etch, and explore advanced features like conditional logic and custom field integration.

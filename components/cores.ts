// cores.js
export const cores: { [key: string]: { [key: string]: string } } = {
    text: {
      foreground: '#000000',
      lime: '#84cc16'
    },
    background: {
      customSky: '#E0F2FE',
      customDarkBlue: '#0f172a'
    },
    status: {
      primary: '#1D4ED8',
      secondary: '#6B7280',
      success: '#10B981',
      warning: '#F59E0B',
      danger: '#EF4444'
    }
  };
  
  export const getColor = (colorName: string): string => {
    const colorGroups = Object.values(cores);
    for (const group of colorGroups) {
      if (group[colorName]) {
        return group[colorName];
      }
    }
    throw new Error(`Color ${colorName} not found`);
  };
  
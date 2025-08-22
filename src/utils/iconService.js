// High-quality icon service for institutions and companies
export const getInstitutionIcon = (institutionName, fallbackUrl) => {
  const name = institutionName?.toLowerCase();
  
  // Use local icons first, then fallback to external if needed
  const logoMap = {};

  // Try to find exact match first
  let logoData = logoMap[name];
  
  // If no exact match, try partial matches
  if (!logoData) {
    const partialMatch = Object.keys(logoMap).find(key => 
      name?.includes(key.split(' ')[0]) || key.includes(name?.split(' ')[0])
    );
    if (partialMatch) {
      logoData = logoMap[partialMatch];
    }
  }

  return {
    primary: logoData?.url || fallbackUrl,
    fallback: logoData?.fallback || fallbackUrl,
    hasHighQuality: !!logoData
  };
};

// Brand colors for consistent theming
export const getBrandColors = (institutionName) => {
  const name = institutionName?.toLowerCase();
  
  const colorMap = {
    'penn': { primary: '#041E42', secondary: '#FFFFFF', accent: '#1E407C' },
    'pennsylvania': { primary: '#041E42', secondary: '#FFFFFF', accent: '#1E407C' },
    'dbs': { primary: '#E31837', secondary: '#FFFFFF', accent: '#B71C1C' },
    'gitam': { primary: '#FF6B35', secondary: '#FFFFFF', accent: '#E65100' },
    'idrbt': { primary: '#1B4D72', secondary: '#FFFFFF', accent: '#0D47A1' },
    'walmart': { primary: '#0071CE', secondary: '#FFC220', accent: '#004C91' }
  };

  const match = Object.keys(colorMap).find(key => name?.includes(key));
  return match ? colorMap[match] : { 
    primary: '#64ffda', 
    secondary: '#FFFFFF', 
    accent: '#14cba8' 
  };
};

export default { getInstitutionIcon, getBrandColors };

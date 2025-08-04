import { useEffect } from 'react';
const widget_code = import.meta.env.VITE_WIDGET_CODE;
const ChatWidget = () => {
  useEffect(() => {
    // Create and append the Zoho SalesIQ script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'zoho-salesiq-script';
    script.src = 'https://salesiq.zoho.in/widget';
    script.async = true;
    
    // Set the widget configuration
    script.onload = () => {
      if (window.$zoho && window.$zoho.salesiq) {
        window.$zoho.salesiq.ready = function() {
          // Initialize with your widget code
          window.$zoho.salesiq.init();
        };
      }
    };
    
    document.body.appendChild(script);

    // Add the widget configuration
    const configScript = document.createElement('script');
    configScript.type = 'text/javascript';
    configScript.innerHTML = `
      window.$zoho = window.$zoho || {};
      window.$zoho.salesiq = window.$zoho.salesiq || {
        widgetcode: '${widget_code}',
        values: {},
        ready: function() {}
      };
    `;
    document.head.appendChild(configScript);

    // Cleanup function
    return () => {
      const scriptElement = document.getElementById('zoho-salesiq-script');
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
      if (configScript.parentNode) {
        document.head.removeChild(configScript);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default ChatWidget;

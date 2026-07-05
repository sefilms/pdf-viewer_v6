    <script>
      document.addEventListener('DOMContentLoaded', function() {
        const infoButton = document.getElementById('documentInfoButton');
        const infoPanel = document.getElementById('customInfoPanel');
        const closeButton = document.getElementById('closeInfoPanel');

        infoButton.addEventListener('click', function() {
          infoPanel.classList.remove('hidden');
          setTimeout(() => infoPanel.classList.toggle('panelOpen'), 10); 
        });

        closeButton.addEventListener('click', function() {
          infoPanel.classList.remove('panelOpen');
          setTimeout(() => infoPanel.classList.add('hidden'), 300);
        });

        const urlParams = new URLSearchParams(window.location.search);
        
        function updateField(paramName, elementId) {
          const value = urlParams.get(paramName);
          if (value) {
            document.getElementById(elementId).textContent = decodeURIComponent(value);
          }
        }

        updateField('formid', 'infoFormId');
        updateField('year', 'infoYear');
        updateField('type', 'infoType');
        updateField('factor', 'infoFactor');
        updateField('mfg', 'infoManufacturer');
      });
    </script>

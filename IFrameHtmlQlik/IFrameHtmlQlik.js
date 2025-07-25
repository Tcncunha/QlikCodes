define(["qlik", "jquery"], function(qlik, $) {
    'use strict';
    
    return {
        definition: {
            type: "items",
            component: "accordion",
            items: {
                settings: {
                    uses: "settings",
                    items: {
                        htmlContent: {
                            ref: "htmlContent",
                            label: "HTML Content",
                            type: "string",
                            expression: "optional",
                            defaultValue: '<iframe src="https://example.com" style="width:100%; height:100%; border:none;"></iframe>'
                        }
                    }
                }
            }
        },
        paint: function($element, layout) {
            var html = layout.htmlContent;
            
            // Clear the element
            $element.empty();
            
            // Create a container for the iframe
            var $container = $('<div>').css({
                width: '100%',
                height: '100%',
                overflow: 'hidden'
            });
            
            // Set the HTML content
            $container.html(html);
            
            // Append the container to the element
            $element.append($container);
            
            // Adjust iframe size to fit the container
            $container.find('iframe').css({
                width: '100%',
                height: '100%'
            });

            return qlik.Promise.resolve();
        }
    };
});

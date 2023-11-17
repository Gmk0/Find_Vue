import{a9 as n}from"./app-734f03f5.js";var e=`
@layer primevue {
    .p-image-mask {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-image-preview-container {
        position: relative;
        display: inline-block;
    }
    
    .p-image-preview-indicator {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    .p-image-preview-container:hover > .p-image-preview-indicator {
        opacity: 1;
        cursor: pointer;
    }
    
    .p-image-preview-container > img {
        cursor: pointer;
    }
    
    .p-image-toolbar {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
    }
    
    .p-image-action.p-link {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .p-image-preview {
        transition: transform 0.15s;
        max-width: 100vw;
        max-height: 100vh;
    }
    
    .p-image-preview-enter-active {
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }
    .p-image-preview-leave-active {
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .p-image-preview-enter-from,
    .p-image-preview-leave-to {
        opacity: 0;
        transform: scale(0.7);
    }
}
`;n(e,{name:"image",manual:!0});

import{_ as a}from"./UserLayout-dd47d869.js";import{P as e,e as l,a as n,t as o,o as i}from"./app-fdc68bd6.js";import"./inputnumber.esm-41568188.js";import"./index.esm-0096a10c.js";import"./button.esm-a98c514e.js";import"./index.esm-8d9cd810.js";import"./PartialHeaderUser.vue_vue_type_style_index_0_lang-829c099f.js";var r=`
@layer primevue {
    .p-paginator-default {
        display: flex;
    }
    
    .p-paginator {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .p-paginator-left-content {
        margin-right: auto;
    }
    
    .p-paginator-right-content {
        margin-left: auto;
    }
    
    .p-paginator-page,
    .p-paginator-next,
    .p-paginator-last,
    .p-paginator-first,
    .p-paginator-prev,
    .p-paginator-current {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        user-select: none;
        overflow: hidden;
        position: relative;
    }
    
    .p-paginator-element:focus {
        z-index: 1;
        position: relative;
    }
}
`;e(r,{name:"paginator",manual:!0});var p=`
@layer primevue {
    .p-datatable {
        position: relative;
    }
    
    .p-datatable-table {
        border-spacing: 0px;
        width: 100%;
    }
    
    .p-datatable .p-sortable-column {
        cursor: pointer;
        user-select: none;
    }
    
    .p-datatable .p-sortable-column .p-column-title,
    .p-datatable .p-sortable-column .p-sortable-column-icon,
    .p-datatable .p-sortable-column .p-sortable-column-badge {
        vertical-align: middle;
    }
    
    .p-datatable .p-sortable-column .p-sortable-column-badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-datatable-hoverable-rows .p-selectable-row {
        cursor: pointer;
    }
    
    /* Scrollable */
    .p-datatable-scrollable > .p-datatable-wrapper {
        position: relative;
    }
    
    .p-datatable-scrollable-table > .p-datatable-thead {
        top: 0;
        z-index: 1;
    }
    
    .p-datatable-scrollable-table > .p-datatable-frozen-tbody {
        position: sticky;
        z-index: 1;
    }
    
    .p-datatable-scrollable-table > .p-datatable-tfoot {
        bottom: 0;
        z-index: 1;
    }
    
    .p-datatable-scrollable .p-frozen-column {
        position: sticky;
        background: inherit;
    }
    
    .p-datatable-scrollable th.p-frozen-column {
        z-index: 1;
    }
    
    .p-datatable-flex-scrollable {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    
    .p-datatable-flex-scrollable > .p-datatable-wrapper {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
    }
    
    .p-datatable-scrollable-table > .p-datatable-tbody > .p-rowgroup-header {
        position: sticky;
        z-index: 1;
    }
    
    /* Resizable */
    .p-datatable-resizable-table > .p-datatable-thead > tr > th,
    .p-datatable-resizable-table > .p-datatable-tfoot > tr > td,
    .p-datatable-resizable-table > .p-datatable-tbody > tr > td {
        overflow: hidden;
        white-space: nowrap;
    }
    
    .p-datatable-resizable-table > .p-datatable-thead > tr > th.p-resizable-column:not(.p-frozen-column) {
        background-clip: padding-box;
        position: relative;
    }
    
    .p-datatable-resizable-table-fit > .p-datatable-thead > tr > th.p-resizable-column:last-child .p-column-resizer {
        display: none;
    }
    
    .p-datatable .p-column-resizer {
        display: block;
        position: absolute !important;
        top: 0;
        right: 0;
        margin: 0;
        width: 0.5rem;
        height: 100%;
        padding: 0px;
        cursor: col-resize;
        border: 1px solid transparent;
    }
    
    .p-datatable .p-column-header-content {
        display: flex;
        align-items: center;
    }
    
    .p-datatable .p-column-resizer-helper {
        width: 1px;
        position: absolute;
        z-index: 10;
        display: none;
    }
    
    .p-datatable .p-row-editor-init,
    .p-datatable .p-row-editor-save,
    .p-datatable .p-row-editor-cancel {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }
    
    /* Expand */
    .p-datatable .p-row-toggler {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }
    
    /* Reorder */
    .p-datatable-reorder-indicator-up,
    .p-datatable-reorder-indicator-down {
        position: absolute;
        display: none;
    }
    
    .p-reorderable-column,
    .p-datatable-reorderablerow-handle {
        cursor: move;
    }
    
    /* Loader */
    .p-datatable .p-datatable-loading-overlay {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }
    
    /* Filter */
    .p-column-filter-row {
        display: flex;
        align-items: center;
        width: 100%;
    }
    
    .p-column-filter-menu {
        display: inline-flex;
        margin-left: auto;
    }
    
    .p-column-filter-row .p-column-filter-element {
        flex: 1 1 auto;
        width: 1%;
    }
    
    .p-column-filter-menu-button,
    .p-column-filter-clear-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }
    
    .p-column-filter-row-items {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    
    .p-column-filter-row-item {
        cursor: pointer;
    }
    
    .p-column-filter-add-button,
    .p-column-filter-remove-button {
        justify-content: center;
    }
    
    .p-column-filter-add-button .p-button-label,
    .p-column-filter-remove-button .p-button-label {
        flex-grow: 0;
    }
    
    .p-column-filter-buttonbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .p-column-filter-buttonbar .p-button:not(.p-button-icon-only) {
        width: auto;
    }
    
    /* Responsive */
    .p-datatable .p-datatable-tbody > tr > td > .p-column-title {
        display: none;
    }
    
    /* VirtualScroller */
    .p-datatable-virtualscroller-spacer {
        display: flex;
    }
    
    .p-datatable .p-virtualscroller .p-virtualscroller-loading {
        transform: none !important;
        min-height: 0;
        position: sticky;
        top: 0;
        left: 0;
    }
}
`;e(p,{name:"datatable",manual:!0});const d=n("div",{class:"flex flex-col"},[n("div",null,[n("h1",{class:"text-lg font-semibold text-gray-800 lg:text-2xl dark:text-gray-100"},"Commandes")])],-1),s={class:"mt-8"},v=Object.assign({layout:a},{__name:"CommandeUser",props:{commandes:Array},setup(t){return(c,b)=>(i(),l("div",null,[d,n("div",s,o(t.commandes),1)]))}});export{v as default};

// filepath: /tsx-jsdoc-extractor/tsx-jsdoc-extractor/src/types/index.ts
export interface JSDocDescription {
    description: string;
    examples?: string[];
}

export interface Prop {
    name: string;
    type: string;
    required: boolean;
    description?: string;
}

export interface JSDocProps {
    props: Prop[];
}

export interface ExtractedJSDoc {
    componentName: string;
    description: JSDocDescription;
    props: JSDocProps;
}

declare module BABYLON {
    class CustomShaderStructure {
        FragmentStore: string;
        VertexStore: string;
        constructor();
    }
    class ShaderSpecialParts {
        constructor();
        Fragment_Begin: string;
        Fragment_Definations: string;
        Fragment_MainBegin: string;
        Fragment_Custom_Deffiuse: string;
        Fragment_Custom_Alpha: string;
        Fragment_Before_FragColor: string;
        Vertex_Begin: string;
        Vertex_Definations: string;
        Vertex_MainBegin: string;
        Vertex_Befor_PositionUpdated: string;
        Vertex_Befor_NormalUpdated: string;
    }
    class ShaderForVer3_0 extends CustomShaderStructure {
        constructor();
    }
    class StandardShaderVersions {
        static Ver3_0: any;
    }
    class CustomMaterial extends StandardMaterial {
        static ShaderIndexer: number;
        CustomParts: ShaderSpecialParts;
        ShaderVersion: CustomShaderStructure;
        _customUnifrom: string[];
        _newUnifroms: string[];
        _newUnifromInstances: any[];
        _newSamplerInstances: Texture[];
        AttachAfterBind(mesh: Mesh, effect: Effect): void;
        ReviewUniform(name: string, arr: string[]): string[];
        Builder(shaderName: string, uniforms: string[], uniformBuffers: string[], samplers: string[], defines: StandardMaterialDefines): string;
        SelectVersion(ver: string): void;
        constructor(name: string, scene: Scene);
        AddUniform(name: string, kind: string, param: any): CustomMaterial;
        Fragment_Begin(shaderPart: string): CustomMaterial;
        Fragment_Definations(shaderPart: string): CustomMaterial;
        Fragment_MainBegin(shaderPart: string): CustomMaterial;
        Fragment_Custom_Deffiuse(shaderPart: string): CustomMaterial;
        Fragment_Custom_Alpha(shaderPart: string): CustomMaterial;
        Fragment_Before_FragColor(shaderPart: string): CustomMaterial;
        Vertex_Begin(shaderPart: string): CustomMaterial;
        Vertex_Definations(shaderPart: string): CustomMaterial;
        Vertex_MainBegin(shaderPart: string): CustomMaterial;
        Vertex_Befor_PositionUpdated(shaderPart: string): CustomMaterial;
        Vertex_Befor_NormalUpdated(shaderPart: string): CustomMaterial;
    }
}

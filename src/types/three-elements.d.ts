// src/types/three-elements.d.ts

import { MeshLine, MeshLineMaterial } from 'three.meshline'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        attach?: string
        ref?: React.Ref<MeshLine>
      }
      meshLineMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        attach?: string
        ref?: React.Ref<MeshLineMaterial>
      }
    }
  }
}

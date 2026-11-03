"use client";
import { ReactLenis } from '@studio-freight/react-lenis';
import { ComponentProps, ReactNode } from 'react';

export default function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root>
      {children as ComponentProps<typeof ReactLenis>['children']}
    </ReactLenis>
  );
}
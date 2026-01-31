'use client';

import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Separator className="mb-8 bg-gray-800" />

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Organized by</h3>
            <p className="text-gray-400 mb-2">AM2I & FSBM – Hassan II University of Casablanca</p>
            <p className="text-gray-500 text-sm">
              Bd Commandant Driss Al Harti, Casablanca 20670, Morocco
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Proceedings</h3>
            <p className="text-gray-400">
              Published in Springer LNCS (Lecture Notes in Computer Science)
            </p>
          </div>
        </div>

        <Separator className="mb-8 bg-gray-800" />

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-sm text-gray-400">
          <p>&copy; 2024 AM2I - All rights reserved</p>
          <p>Moroccan Association for Artificial Intelligence and Innovation</p>
        </div>
      </div>
    </footer>
  );
}

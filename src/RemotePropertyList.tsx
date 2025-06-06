import React from 'react';
import type { ReactNode } from 'react';

interface Property {
  id: string;
  name: string;
  squareFeet: number;
  location: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  imageUrl: string;
  available: string;
  yearBuilt: number;
  clearHeight: string;
  truckCourtDepth: string;
  buildings: number;
}

const mockProperties: Property[] = [
  {
    id: '1',
    name: 'Crossroads Distribution Center',
    squareFeet: 250000,
    location: {
      street: '2500 Stemmons Freeway',
      city: 'Dallas',
      state: 'TX',
      zip: '75207'
    },
    imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Warehouse+1',
    available: 'Immediately',
    yearBuilt: 2020,
    clearHeight: '36\'',
    truckCourtDepth: '135\'-185\'',
    buildings: 3
  },
  {
    id: '2',
    name: 'Gateway Industrial Park',
    squareFeet: 180000,
    location: {
      street: '4747 E Van Buren Street',
      city: 'Phoenix',
      state: 'AZ',
      zip: '85008'
    },
    imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Warehouse+2',
    available: 'Q2 2024',
    yearBuilt: 2021,
    clearHeight: '32\'',
    truckCourtDepth: '130\'-175\'',
    buildings: 1
  },
  {
    id: '3',
    name: 'Riverside Logistics Center',
    squareFeet: 320000,
    location: {
      street: '1100 Howell Mill Road',
      city: 'Atlanta',
      state: 'GA',
      zip: '30318'
    },
    imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Warehouse+3',
    available: 'Q3 2024',
    yearBuilt: 2019,
    clearHeight: '40\'',
    truckCourtDepth: '140\'-190\'',
    buildings: 5
  }
];

interface RemotePropertyListProps {
  onPropertyClick?: (property: Property) => void;
  className?: string;
}

const RemotePropertyList: React.FC<RemotePropertyListProps> = ({ 
  onPropertyClick,
  className = ''
}) => {
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatAddress = (location: Property['location']) => {
    return `${location.street}, ${location.city}, ${location.state} ${location.zip}`;
  };

  return (
    <div className={`max-w-7xl mx-auto ${className}`}>
      <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-200">
        Property List from Property Search
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProperties.map((property) => (
          <div 
            key={property.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-[1.02] cursor-pointer"
            onClick={() => onPropertyClick?.(property)}
          >
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={property.imageUrl} 
                alt={property.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {property.name}
              </h3>
              <p className="text-gray-500 text-sm mb-4 italic">
                {formatAddress(property.location)}
              </p>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Buildings:</span>
                  <span>{property.buildings}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Square Feet:</span>
                  <span>{formatNumber(property.squareFeet)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Available:</span>
                  <span>{property.available}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Year Built:</span>
                  <span>{property.yearBuilt}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Clear Height:</span>
                  <span>{property.clearHeight}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Truck Court Depth:</span>
                  <span>{property.truckCourtDepth}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button 
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(`https://maps.google.com/?q=${encodeURIComponent(formatAddress(property.location))}`, '_blank');
                  }}
                >
                  View on Map
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RemotePropertyList; 
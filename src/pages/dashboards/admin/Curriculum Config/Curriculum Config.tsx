'use client';

import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { FiSave, FiChevronDown } from 'react-icons/fi';

interface Platform {
  id: string;
  name: string;
  hours: number;
  type: 'synchronous' | 'asynchronous';
  description: string;
}

interface State {
  id: string;
  name: string;
  code: string;
  hasCustomStandards: boolean;
  requiresSynchronous?: boolean;
  requiredHours?: number;
  requirement?: string;
  graduatingClass?: number;
}

export default function CurriculumConfigPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('sync-90');
  const [selectedState, setSelectedState] = useState<string>('OK');
  
  const platforms: Platform[] = [
    {
      id: 'sync-90',
      name: 'Synchronous 90-Hour Platform',
      hours: 90,
      type: 'synchronous',
      description: 'Complete synchronous platform aligned with Oklahoma state requirements for high school graduation'
    },
    {
      id: 'async-45',
      name: 'Asynchronous 45-Hour Platform',
      hours: 45,
      type: 'asynchronous',
      description: 'Flexible asynchronous learning platform for shorter course requirements'
    },
    {
      id: 'async-30',
      name: 'Asynchronous 30-Hour Platform',
      hours: 30,
      type: 'asynchronous',
      description: 'Condensed asynchronous platform for basic financial literacy requirements'
    }
  ];

  const states: State[] = [
    { id: 'AL', name: 'Alabama', code: 'AL', hasCustomStandards: false, requirement: 'One-year Career Preparedness course', graduatingClass: 2013 },
    { id: 'CA', name: 'California', code: 'CA', hasCustomStandards: false, requirement: 'One-semester course', graduatingClass: 2031 },
    { id: 'CT', name: 'Connecticut', code: 'CT', hasCustomStandards: false, requirement: 'Half-credit course', graduatingClass: 2027 },
    { id: 'FL', name: 'Florida', code: 'FL', hasCustomStandards: false, requirement: 'Half-credit course', graduatingClass: 2027 },
    { id: 'GA', name: 'Georgia', code: 'GA', hasCustomStandards: false, requirement: 'Half-credit course', graduatingClass: 2028 },
    { id: 'IN', name: 'Indiana', code: 'IN', hasCustomStandards: false, requirement: 'One-semester course', graduatingClass: 2028 },
    { id: 'IA', name: 'Iowa', code: 'IA', hasCustomStandards: false, requirement: 'Half-unit course', graduatingClass: 2023 },
    { id: 'KS', name: 'Kansas', code: 'KS', hasCustomStandards: false, requirement: 'Half-credit course', graduatingClass: 2027 },
    { id: 'KY', name: 'Kentucky', code: 'KY', hasCustomStandards: false, requirement: 'One-credit course', graduatingClass: 2030 },
    { id: 'LA', name: 'Louisiana', code: 'LA', hasCustomStandards: false, requirement: 'One-unit course', graduatingClass: 2027 },
    { id: 'MI', name: 'Michigan', code: 'MI', hasCustomStandards: false, requirement: 'Half-credit course', graduatingClass: 2028 },
    { id: 'MN', name: 'Minnesota', code: 'MN', hasCustomStandards: false, requirement: 'Course required', graduatingClass: 2028 },
    { id: 'MS', name: 'Mississippi', code: 'MS', hasCustomStandards: false, requirement: 'One-year College & Career Readiness course', graduatingClass: 2022 },
    { id: 'MO', name: 'Missouri', code: 'MO', hasCustomStandards: false, requirement: 'Half-credit course', graduatingClass: 2010 },
    { id: 'NE', name: 'Nebraska', code: 'NE', hasCustomStandards: false, requirement: 'One-semester course', graduatingClass: 2024 },
    { id: 'NH', name: 'New Hampshire', code: 'NH', hasCustomStandards: false, requirement: 'One-semester course', graduatingClass: 2027 },
    { id: 'NC', name: 'North Carolina', code: 'NC', hasCustomStandards: false, requirement: 'One-year Economics and Personal Finance course', graduatingClass: 2024 },
    { id: 'OH', name: 'Ohio', code: 'OH', hasCustomStandards: false, requirement: 'One-semester course', graduatingClass: 2026 },
    {
      id: 'OK',
      name: 'Oklahoma',
      code: 'OK',
      hasCustomStandards: true,
      requiresSynchronous: true,
      requiredHours: 90,
      requirement: 'Half-unit course',
      graduatingClass: 2029
    },
    { id: 'OR', name: 'Oregon', code: 'OR', hasCustomStandards: false, requirement: 'Half-credit course', graduatingClass: 2027 },
    { id: 'PA', name: 'Pennsylvania', code: 'PA', hasCustomStandards: false, requirement: 'One-semester course', graduatingClass: 2030 },
    { id: 'RI', name: 'Rhode Island', code: 'RI', hasCustomStandards: false, requirement: 'Demonstrated proficiency', graduatingClass: 2024 },
    { id: 'SC', name: 'South Carolina', code: 'SC', hasCustomStandards: false, requirement: 'Half-credit course', graduatingClass: 2028 },
    { id: 'TN', name: 'Tennessee', code: 'TN', hasCustomStandards: false, requirement: 'Half-credit course', graduatingClass: 2013 },
    { id: 'UT', name: 'Utah', code: 'UT', hasCustomStandards: false, requirement: 'One-semester General Financial Literacy course', graduatingClass: 2008 },
    { id: 'VA', name: 'Virginia', code: 'VA', hasCustomStandards: false, requirement: 'One-year Economics and Personal Finance course', graduatingClass: 2015 },
    { id: 'WV', name: 'West Virginia', code: 'WV', hasCustomStandards: false, requirement: 'One-semester course', graduatingClass: 2028 },
    { id: 'WI', name: 'Wisconsin', code: 'WI', hasCustomStandards: false, requirement: 'Half-credit course', graduatingClass: 2028 }
  ];

  const handlePlatformChange = (platformId: string) => {
    setSelectedPlatform(platformId);
  };

  const handleStateChange = (stateId: string) => {
    setSelectedState(stateId);
  };

  const handleSave = async () => {
    try {
      // TODO: Implement API call to save configuration
      console.log('Saving configuration:', {
        platform: selectedPlatform,
        state: selectedState
      });
      // Show success notification
    } catch (error) {
      // Show error notification
      console.error('Error saving configuration:', error);
    }
  };

  const selectedStateData = states.find(state => state.id === selectedState);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold text-gray-900">Curriculum Configuration</h1>
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                <FiSave className="w-4 h-4" />
                Save Configuration
              </button>
            </div>

            {/* State Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <div className="relative">
                <select
                  value={selectedState}
                  onChange={(e) => handleStateChange(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  {states.map((state) => (
                    <option key={state.id} value={state.id}>
                      {state.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <FiChevronDown className="h-4 w-4" />
                </div>
              </div>
              {selectedStateData?.requiresSynchronous && (
                <p className="mt-2 text-sm text-amber-600">
                  Note: {selectedStateData.name} requires the {selectedStateData.requiredHours}-hour synchronous platform for high school graduation.
                </p>
              )}
            </div>

            {/* Platform Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Platform Selection
              </label>
              <div className="space-y-4">
                {platforms.map((platform) => (
                  <div
                    key={platform.id}
                    className={`relative rounded-lg border p-4 cursor-pointer transition-colors ${
                      selectedPlatform === platform.id
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-300 hover:border-indigo-400'
                    } ${
                      selectedStateData?.requiresSynchronous && 
                      selectedStateData?.requiredHours === 90 && 
                      platform.id !== 'sync-90'
                        ? 'opacity-50 cursor-not-allowed'
                        : ''
                    }`}
                    onClick={() => {
                      if (!(selectedStateData?.requiresSynchronous && selectedStateData?.requiredHours === 90 && platform.id !== 'sync-90')) {
                        handlePlatformChange(platform.id);
                      }
                    }}
                  >
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <p className="font-medium text-gray-900">{platform.name}</p>
                          <p className="text-gray-500">{platform.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          platform.type === 'synchronous' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {platform.type}
                        </span>
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {platform.hours} hours
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Standards Notice */}
            <div className="mt-8 bg-gray-50 p-4 rounded-md">
              <h3 className="text-sm font-medium text-gray-900">Standards Information</h3>
              <p className="mt-2 text-sm text-gray-500">
                {selectedStateData?.hasCustomStandards 
                  ? `Custom standards and chapters are available for ${selectedStateData.name}. These are configured to meet state-specific requirements.`
                  : `Standard financial literacy curriculum will be used for ${selectedStateData?.name}. State-specific standards are coming soon.`
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
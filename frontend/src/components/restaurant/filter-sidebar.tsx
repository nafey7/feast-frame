// "use client";

// import { X, Star, Award, Filter } from "lucide-react";
// import { FilterOptions } from "@/types/restaurant";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// interface FilterSidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
//   filters: {
//     cuisines: string[];
//     minRating: number | null;
//   };
//   onFilterChange: (filters: any) => void;
//   filterOptions: FilterOptions;
// }

// export function FilterSidebar({
//   isOpen,
//   onClose,
//   filters,
//   onFilterChange,
//   filterOptions,
// }: FilterSidebarProps) {
//   const toggleCuisine = (cuisine: string) => {
//     const newCuisines = filters.cuisines.includes(cuisine)
//       ? filters.cuisines.filter((c) => c !== cuisine)
//       : [...filters.cuisines, cuisine];
//     onFilterChange({ ...filters, cuisines: newCuisines });
//   };

//   const setMinRating = (rating: number | null) => {
//     onFilterChange({ ...filters, minRating: rating });
//   };

//   const clearAllFilters = () => {
//     onFilterChange({
//       cuisines: [],
//       minRating: null,
//     });
//   };

//   if (!isOpen) return null;

//   return (
//     <>
//       {/* Backdrop */}
//       <div
//         className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-fade-in"
//         onClick={onClose}
//       />

//       {/* Sidebar */}
//       <div
//         className={`fixed lg:sticky top-0 left-0 h-screen lg:h-auto w-80 lg:w-full bg-white dark:bg-gray-900 z-50 overflow-y-auto border-r lg:border-r-0 lg:border border-gray-200 dark:border-gray-800 rounded-none lg:rounded-2xl shadow-2xl lg:shadow-lg animate-slide-up`}
//       >
//         <div className="p-6">
//           {/* Header */}
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
//               <SlidersHorizontal className="w-6 h-6 text-orange-500" />
//               Filters
//             </h2>
//             <button
//               onClick={onClose}
//               className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
//             >
//               <X className="w-5 h-5 text-foreground" />
//             </button>
//           </div>

//           {/* Clear All */}
//           <button
//             onClick={clearAllFilters}
//             className="w-full mb-6 px-4 py-2 text-sm font-medium text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 bg-orange-50 dark:bg-orange-900/20 rounded-lg transition-colors"
//           >
//             Clear All Filters
//           </button>

//           {/* Rating Filter */}
//           <div className="mb-6">
//             <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
//               <Star className="w-5 h-5 text-yellow-500" />
//               Minimum Rating
//             </h3>
//             <div className="space-y-4">
//               <input
//                 type="range"
//                 min="0"
//                 max="5"
//                 step="0.5"
//                 value={filters.minRating ?? 0}
//                 onChange={(e) => {
//                   const value = parseFloat(e.target.value);
//                   setMinRating(value === 0 ? null : value);
//                 }}
//                 className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
//               />
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-foreground/70">
//                   {filters.minRating ? `${filters.minRating}+` : "All ratings"}
//                 </span>
//                 {filters.minRating && (
//                   <button
//                     onClick={() => setMinRating(null)}
//                     className="text-xs text-orange-500 hover:text-orange-600 font-medium"
//                   >
//                     Clear
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Cuisine Filter */}
//           <div className="mb-6">
//             <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
//               <Award className="w-5 h-5 text-purple-500" />
//               Cuisine Type
//             </h3>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="outline" className="w-full justify-between">
//                   <span>{filters.cuisines.length > 0 ? `${filters.cuisines.length} selected` : "Select cuisines"}</span>
//                   <Filter className="h-4 w-4" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="w-auto p-4" align="start">
//                 <div className="mb-3">
//                   <DropdownMenuLabel>Filter by Cuisine</DropdownMenuLabel>
//                   <DropdownMenuSeparator className="mt-2" />
//                 </div>
//                 <div className="grid grid-cols-4 gap-3">
//                   {filterOptions.cuisines.map((cuisine) => (
//                     <label
//                       key={cuisine}
//                       className="flex items-center cursor-pointer group"
//                     >
//                       <input
//                         type="checkbox"
//                         checked={filters.cuisines.includes(cuisine)}
//                         onChange={() => toggleCuisine(cuisine)}
//                         className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
//                       />
//                       <span className="text-sm text-foreground group-hover:text-orange-500 transition-colors ml-2 truncate">
//                         {cuisine}
//                       </span>
//                     </label>
//                   ))}
//                 </div>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// function SlidersHorizontal({ className }: { className?: string }) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <line x1="4" y1="21" x2="4" y2="14" />
//       <line x1="4" y1="10" x2="4" y2="3" />
//       <line x1="12" y1="21" x2="12" y2="12" />
//       <line x1="12" y1="8" x2="12" y2="3" />
//       <line x1="20" y1="21" x2="20" y2="16" />
//       <line x1="20" y1="12" x2="20" y2="3" />
//       <line x1="2" y1="14" x2="6" y2="14" />
//       <line x1="10" y1="8" x2="14" y2="8" />
//       <line x1="18" y1="16" x2="22" y2="16" />
//     </svg>
//   );
// }

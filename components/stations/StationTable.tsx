import { Station } from '../../types';
import { useState } from 'react';
import Image from 'next/image';

interface Props {
  data: Station[];
}

export default function StationTable({ data }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;  // Matches design pagination
  const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="bg-gray-800 rounded overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-700">
          <tr className="text-gray-300">
            <th className="p-4 text-left">Image</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Program</th>
            <th className="p-4 text-left">Genre</th>
            <th className="p-4 text-left">Play station</th>
            <th className="p-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((station) => (
            <tr key={station.id} className='border-white-300'>
              <td className="p-4">
                <Image
                  src={station.image}
                  alt={station.name}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                  style={{ objectFit: 'cover' }}
                />
              </td>
              <td className="p-4">{station.name}</td>
              <td className="p-4">{station.description}</td>  {/* Using description as program for mock */}
              <td className="p-4">{station.genre}</td>
              <td className="p-4">{station.frequency}</td>
              <td className="p-4">
                <button className="text-accent mr-2">▶️</button>
                <button className="text-accent">⋯</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex justify-center space-x-2 p-4 bg-gray-700">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-2 py-1 bg-accent/20 rounded disabled:opacity-50">‹‹</button>
        <span>{currentPage}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage * itemsPerPage >= data.length} className="px-2 py-1 bg-accent/20 rounded disabled:opacity-50">››</button>
      </div>
    </div>
  );
}
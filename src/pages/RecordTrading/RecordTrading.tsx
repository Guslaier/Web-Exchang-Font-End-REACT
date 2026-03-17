import React, { useEffect } from 'react';
import Button from '../../components/common/Buttom/Buttom';
import { getCurrentShiftId } from '../../services/auth.service';

export interface ExchangeRow {
  code: string;
  sale: number;
  buyTier1: number;
  buyTier2: number;
  buyTier3: number;
  buyTier4: number ;
  max: number ;
}

const MOCK_DATA: ExchangeRow[] = [
  { code: 'USD L', sale: 32.00, buyTier1: 29.25, buyTier2: 31.17, buyTier3: 31.72, buyTier4: 31.93, max: 32.10 },
  { code: 'USD M', sale: 32.00, buyTier1: 28.64, buyTier2: 30.58, buyTier3: 31.55, buyTier4: 0, max: 31.70 },
  { code: 'USD S', sale: 27.00, buyTier1: 26.00, buyTier2: 26.00, buyTier3: 0, buyTier4: 0, max: 0 },
  { code: 'EUR', sale: 37.00, buyTier1: 34.04, buyTier2: 35.94, buyTier3: 36.58, buyTier4: 36.82, max: 36.90 },
  { code: 'GBP', sale: 37.00, buyTier1: 38.75, buyTier2: 40.67, buyTier3: 41.63, buyTier4: 41.82, max: 41.90 },
];


const RecordTrading : React.FC = () => {
  useEffect(() => {
    console.log(getCurrentShiftId()) ; 
  }, []);
    return (
        <div className="min-h-screen bg-slate-50 p-4 font-sans text-slate-800">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-blue-800 text-white px-3 py-1 rounded font-bold">7-11</div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
              <span className="text-xs">👤</span>
            </div>
            <span className="font-semibold text-blue-900">John Doe</span>
          </div>
        </div>
        <div className="text-blue-900 font-bold uppercase tracking-wider">
          Sat 1 May 10 : 08
        </div>
      </header>

      {/* Search Bar */}
      <div className="relative mb-6">
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full bg-slate-200 border-none rounded-full py-2 px-10 focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <span className="absolute left-4 top-2.5 opacity-40">🔍</span>
      </div>

      {/* Exchange Rate Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-20">
        <table className="w-full text-center border-collapse">
          <thead className="bg-[#3b5998] text-white">
            <tr>
              <th rowSpan={2} className="py-4 font-semibold uppercase text-sm border-r border-white/20">Code</th>
              <th rowSpan={2} className="py-4 font-semibold uppercase text-sm border-r border-white/20">Sale</th>
              <th colSpan={5} className="py-2 font-semibold uppercase text-sm">Buy</th>
            </tr>
            <tr className="bg-[#3b5998] text-white/90 text-xs border-t border-white/10">
              <th className="py-2 border-r border-white/20">1</th>
              <th className="py-2 border-r border-white/20">2</th>
              <th className="py-2 border-r border-white/20">3</th>
              <th className="py-2 border-r border-white/20">4</th>
              <th className="py-2 text-white">Max</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {MOCK_DATA.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="py-4 font-bold text-slate-700">{row.code}</td>
                <td className="py-4 font-bold">{row.sale.toFixed(2)}</td>
                <td className="py-4 text-slate-600 font-medium">{row.buyTier1.toFixed(2)}</td>
                <td className="py-4 text-slate-600 font-medium">{row.buyTier2.toFixed(2)}</td>
                <td className="py-4 text-blue-600 font-bold">{row.buyTier3 > 0 ? row.buyTier3.toFixed(2) : '-'}</td>
                <td className="py-4 text-blue-600 font-bold">{typeof row.buyTier4 === 'number' ? row.buyTier4.toFixed(2) : row.buyTier4}</td>
                <td className="py-4 text-red-500 font-bold">{row.max > 0 ? (typeof row.max === 'number' ? row.max.toFixed(2) : row.max) : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Summary */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-4 flex justify-between items-center shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
          <div>
            <span className="font-bold mr-2">Total Received:</span>
            <span className="font-bold text-slate-700">270,979 THB</span>
          </div>
          <div>
            <span className="font-bold mr-2">Total Exchange:</span>
            <span className="font-bold text-slate-700">113,771 THB</span>
          </div>
        </div>
        <div>
          <span className="font-bold mr-2 italic text-lg text-slate-500">Balance:</span>
          <span className="font-black text-xl">157,208 THB</span>
        </div>
      </footer>
    </div>
    )
}

export default RecordTrading ; 
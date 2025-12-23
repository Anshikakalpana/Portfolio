import React from 'react';

const HuffmanUtility = () => {
  return (
 <div className="max-w-5xl bg-[#1a112f] shadow-lg rounded-2xl flex flex-col md:flex-row items-center p-8   gap-6">

    {/* Image Section */}
    <div className="flex-shrink-0 flex flex-col items-center gap-3">
        <img
          src="/huffman.png"
          alt="Huffman Compression Utility"
          className="h-46 w-56 "
        />
        <a
          href="https://github.com/Anshikakalpana/file-compression-utility"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/github.png"
            alt="GitHub Link"
            className="h-10 w-10 object-contain cursor-pointer hover:scale-110 transition-transform bg-blue-200 rounded-4xl"
          />
        </a>
      </div>

      {/* Text Section */}
      <div className="text-white space-y-3 text-sm md:text-base leading-relaxed">
        <h1 className="text-2xl font-bold text-[#CEB5FD]">
          📦 File Compression Utility (Huffman Coding)
        </h1>

        <p className="font-medium">
          <span className="font-semibold">Stack:</span> C++, STL, File I/O
        </p>

        <p>
          Implemented a lossless file compression utility using Huffman Coding to reduce file size by
          <strong> 50–60%</strong> through optimal prefix-free encoding. Built the complete compression
          and decompression pipeline ensuring accurate data reconstruction.
        </p>

        <p>
          Designed an efficient encoder–decoder workflow with bit-level file handling for compressed
          output generation. Utilized priority queues (min-heaps) to construct Huffman trees with
          <strong> O(n log n)</strong> time complexity while maintaining zero data loss.
        </p>

        <p className="text-[#b396ea]">
          <strong>Focus:</strong> Algorithms • Data Structures • File Systems • Performance Optimization
        </p>
      </div>
    </div>
  );
};

export default HuffmanUtility;

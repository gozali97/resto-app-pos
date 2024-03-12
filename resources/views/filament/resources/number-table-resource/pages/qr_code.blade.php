<x-filament-panels::page xmlns="http://www.w3.org/1999/html">
    <div class="flex justify-center items-center">
       <div class="flex flex-col space-y-4 justify-center items-center">
           <div class="flex max-w-lg rounded-lg border border-gray-200 p-6">
               {!! QrCode::size(200)->generate($record->qr_code) !!}
           </div>
           <div>
               <button wire:click="printBarcode" class="text-white bg-primary-500 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm p-2 text-center me-2 mb-2">Print Barcode</button>
           </div>
       </div>
    </div>
</x-filament-panels::page>

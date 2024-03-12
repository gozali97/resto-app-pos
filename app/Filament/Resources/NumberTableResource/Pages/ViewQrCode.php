<?php

namespace App\Filament\Resources\NumberTableResource\Pages;

use App\Filament\Resources\NumberTableResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;
use Illuminate\Support\Facades\View;

class ViewQrCode extends ViewRecord
{

    public $listeners = ['printBarcode'];

    protected static string $recordTitle = 'View Qr Code';

    protected static string $resource = NumberTableResource::class;

    protected static ?string $title= 'View Qr Code';

    protected static string $view = 'filament.resources.number-table-resource.pages.qr_code';

    public function printBarcode()
    {
        $qr_code = $this->record->qr_code;

        $qr_encrption = base64_encode($qr_code);

        return redirect()->route('admin.print-qr', $qr_encrption);
    }
}

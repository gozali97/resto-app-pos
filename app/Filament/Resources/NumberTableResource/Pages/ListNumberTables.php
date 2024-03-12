<?php

namespace App\Filament\Resources\NumberTableResource\Pages;

use App\Filament\Resources\NumberTableResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListNumberTables extends ListRecords
{
    protected static string $resource = NumberTableResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}

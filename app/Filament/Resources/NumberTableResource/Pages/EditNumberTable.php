<?php

namespace App\Filament\Resources\NumberTableResource\Pages;

use App\Filament\Resources\NumberTableResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditNumberTable extends EditRecord
{
    protected static string $resource = NumberTableResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}

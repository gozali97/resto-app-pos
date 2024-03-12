<?php

namespace App\Filament\Resources;

use App\Filament\Resources\NumberTableResource\Pages;
use App\Filament\Resources\NumberTableResource\RelationManagers;
use App\Models\NumberTable;
use Filament\Actions\Action;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Model;
use LaraZeus\Qr\Components\Qr;

class NumberTableResource extends Resource
{
    protected static ?string $model = NumberTable::class;

    protected static ?string $navigationIcon = 'heroicon-o-hashtag';
    protected static ?int $navigationSort = 1;

    protected static ?string $navigationLabel = 'Number Table';


    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Card::make()
                ->schema([
                    Forms\Components\TextInput::make('number')
                    ->required(),
                    Forms\Components\TextInput::make('description')
                    ->required(),
                    Qr::make('qr_code')
                    ->asSlideOver()
                    ->optionsColumn('number')
                    ->actionIcon('heroicon-o-qr-code')
                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('number')
                ->searchable(),
                Tables\Columns\TextColumn::make('description')
                ->searchable(),
                Tables\Columns\ToggleColumn::make('status')
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\Action::make('View Qr')
                    ->label('Qr Code')
                ->icon('heroicon-o-qr-code')
                ->url(fn(NumberTable $record): string => static::getUrl('qr-code', ['record' => $record])),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListNumberTables::route('/'),
            'create' => Pages\CreateNumberTable::route('/create'),
            'edit' => Pages\EditNumberTable::route('/{record}/edit'),
            'qr-code' => Pages\ViewQrCode::route('/{record}/qr-code'),
        ];
    }
}

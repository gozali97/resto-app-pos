<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Filament\Resources\ProductResource\RelationManagers;
use App\Models\Category;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-gift';

    protected static ?int $navigationSort = 3;

    protected static ?string $navigationLabel = 'Product';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Card::make()
                    ->schema([
                        Forms\Components\Select::make('category_id')
                            ->options(Category::all()->pluck('category_name', 'id'))
                            ->required(),
                        Forms\Components\TextInput::make('product_name')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('price')
                            ->required()
                            ->numeric(),
                        Forms\Components\TextInput::make('stock')
                            ->required()
                            ->numeric(),
                        Forms\Components\Textarea::make('description')
                            ->required()
                            ->rows(4)
                            ->maxLength(255),
                        Forms\Components\FileUpload::make('path_image')
                            ->required()
                            ->directory('product'),
                    ])->columns(2)
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('category.category_name')
                ->searchable(),
                Tables\Columns\TextColumn::make('product_name')
                ->searchable(),
                Tables\Columns\TextColumn::make('price')
                ->searchable(),
                Tables\Columns\TextColumn::make('stock')
                ->searchable(),
                Tables\Columns\ImageColumn::make('path_image')
                ->searchable(),
                Tables\Columns\ToggleColumn::make('status'),
            ])->defaultSort('id', 'desc')
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
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
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}

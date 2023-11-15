<?php

namespace App\Filament\Freelance\Resources;

use App\Filament\Freelance\Resources\RealisationResource\Pages;
use App\Filament\Freelance\Resources\RealisationResource\RelationManagers;
use App\Models\Realisation;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Tables\Columns\SpatieMediaLibraryImageColumn;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;

class RealisationResource extends Resource
{
    protected static ?string $model = Realisation::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([

                Forms\Components\Textarea::make('description')
                    ->required()
                    ->columnSpanFull(),
            SpatieMediaLibraryFileUpload::make('realisation')
            ->multiple()
            ->collection('realisations')
            ->enableReordering(),
                Forms\Components\Toggle::make('afficher')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('description')
                ->wrap(),

                Tables\Columns\IconColumn::make('afficher')
                    ->boolean(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            SpatieMediaLibraryImageColumn::make('realisation')
            ->collection('realisations'),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
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

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()->where('user_id', auth()->user()->id);
    }
    public static function getPages(): array
    {
        return [
            'index' => Pages\ListRealisations::route('/'),
            'create' => Pages\CreateRealisation::route('/create'),
            'view' => Pages\ViewRealisation::route('/{record}'),
            'edit' => Pages\EditRealisation::route('/{record}/edit'),
        ];
    }
}

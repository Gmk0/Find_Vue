<?php

namespace App\Filament\Freelance\Resources;

use App\Filament\Freelance\Resources\OrderResource\Pages;
use App\Filament\Freelance\Resources\OrderResource\Pages\OrderGestion;
use App\Filament\Freelance\Resources\OrderResource\RelationManagers;
use App\Filament\Freelance\Resources\OrderResource\Widgets\OrderStat;
use App\Models\Order;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class OrderResource extends Resource
{
    protected static ?string $model = Order::class;

    protected static ?string $navigationIcon = 'heroicon-m-shopping-cart';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('user_id')
                    ->relationship('user', 'name')
                    ->required(),
                Forms\Components\Select::make('service_id')
                    ->relationship('service', 'title')
                    ->required(),
                Forms\Components\TextInput::make('order_numero')
                    ->required(),
                Forms\Components\TextInput::make('type'),
                Forms\Components\TextInput::make('total_amount')
                    ->required()
                    ->numeric(),
                Forms\Components\TextInput::make('quantity'),
                Forms\Components\TextInput::make('transaction_id'),
                Forms\Components\TextInput::make('progress')
                    ->required()
                    ->numeric()
                    ->default(0),
                Forms\Components\DateTimePicker::make('is_paid'),
                Forms\Components\TextInput::make('status')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('user.name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('service.title')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('order_numero')
                    ->searchable(),
                Tables\Columns\TextColumn::make('total_amount')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('quantity')
                    ->searchable(),
                Tables\Columns\TextColumn::make('progress')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('is_paid')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('status')
                    ->searchable(),
            Tables\Columns\TextColumn::make('feedback.etat')
                ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
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
                Action::make('GESTION')
                ->url(fn (Order $record): string => static::getUrl('gestion',['record' => $record]))
                //Tables\Actions\EditAction::make(),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }
    public static function getWidgets(): array
    {
        return [OrderStat::class,];
    }




    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()->whereHas('service.freelance', function ($q) {
            $q->where('id', auth()->user()->freelance->id);
        });
    }

    public static function getNavigationBadge(): ?string
    {
        return static::$model::whereHas('service.freelance', function ($q) {
            $q->where('id', auth()->user()->freelance->id);
        })->count();
    }


    public static function getPages(): array
    {
        return [
            'index' => Pages\ListOrders::route('/'),
            'create' => Pages\CreateOrder::route('/create'),
            'view' => Pages\ViewOrder::route('/{record}'),
            'gestion' => OrderGestion::route('/{record}/gestion'),
            'edit' => Pages\EditOrder::route('/{record}/edit'),
        ];
    }
}

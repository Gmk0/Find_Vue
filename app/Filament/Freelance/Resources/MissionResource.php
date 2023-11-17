<?php

namespace App\Filament\Freelance\Resources;

use App\Filament\Freelance\Resources\MissionResource\Pages;
use App\Filament\Freelance\Resources\MissionResource\RelationManagers;
use App\Models\Mission;
use Filament\Actions\Action;
use Filament\Forms;
use Filament\Forms\Components\Grid;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\Action as ActionsAction;
use Filament\Tables\Columns\Layout\Grid as LayoutGrid;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Tables\Columns\Layout\Panel;
use Filament\Tables\Columns\Layout\Split;
use Filament\Tables\Columns\TextColumn;

class MissionResource extends Resource
{
    protected static ?string $model = Mission::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('user_id')
                    ->relationship('user', 'name')
                    ->required(),
                Forms\Components\Select::make('category_id')
                    ->relationship('category', 'name')
                    ->required(),
                Forms\Components\Select::make('transaction_id')
                    ->relationship('transaction', 'id'),
                Forms\Components\TextInput::make('title')
                    ->required(),
                Forms\Components\TextInput::make('mission_numero')
                    ->required(),
                Forms\Components\Textarea::make('sub_category')
                    ->columnSpanFull(),
                Forms\Components\Textarea::make('description')
                    ->columnSpanFull(),
                Forms\Components\Textarea::make('exigences')
                    ->columnSpanFull(),
                Forms\Components\Textarea::make('files')
                    ->columnSpanFull(),
                Forms\Components\TextInput::make('budget')
                    ->required()
                    ->numeric(),
                Forms\Components\DatePicker::make('begin_mission'),
                Forms\Components\DatePicker::make('end_mission'),
                Forms\Components\TextInput::make('progress')
                    ->numeric(),
                Forms\Components\DateTimePicker::make('is_paid'),
                Forms\Components\Toggle::make('masquer')
                    ->required(),
                Forms\Components\TextInput::make('status')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->contentGrid([
                'md' => 1,
                'xl' => 1,
            ])
            ->columns([

            LayoutGrid::make(['md'=>2



            ])->schema([
                TextColumn::make('title')->description('titre'),
                TextColumn::make('budget')->description('budget')->money('usd', true),
                TextColumn::make('description')->description('description')->columnSpanFull(),

            ]),





            ])
            ->filters([
                //
            ])
            ->actions([
                //Tables\Actions\ViewAction::make(),
                //Tables\Actions\EditAction::make(),

                ActionsAction::make('Postuler')
            ->url(fn (Mission $record): string => static::getUrl('postuler', ['record' => $record]))
            ])
            ->bulkActions([

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
            'index' => Pages\ListMissions::route('/'),
            'postuler'=>Pages\PostulerMission::route('/{record}/postuler')
            //'create' => Pages\CreateMission::route('/create'),
            //'view' => Pages\ViewMission::route('/{record}'),
           // 'edit' => Pages\EditMission::route('/{record}/edit'),
        ];
    }
}

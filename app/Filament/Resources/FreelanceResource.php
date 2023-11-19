<?php

namespace App\Filament\Resources;

use App\Filament\Resources\FreelanceResource\Pages;
use App\Filament\Resources\FreelanceResource\RelationManagers;
use App\Models\Freelance;
use Filament\Forms;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Tables\Columns\SelectColumn;

class FreelanceResource extends Resource
{
    protected static ?string $model = Freelance::class;

    protected static ?string $navigationGroup = 'Freelances';

    protected static ?string $navigationIcon = 'heroicon-o-users';

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
                Forms\Components\TextInput::make('nom')
                    ->required(),
                Forms\Components\TextInput::make('prenom')
                    ->required(),


            Grid::make('3')->schema([
                Select::make('experience')
                ->options([
                    '1 ans' => '1 ans',
                    '2-5 ans' => '2-5 ans',
                    '5 + ans' => '5 + ans',
                ])
                ->native(false),
                TextInput::make('site')
                ->required(),
                TextInput::make('taux_journalier')
                ->numeric()
                ->required(),

            ]),

                Forms\Components\MarkdownEditor::make('description')
                    ->required()
                    ->columnSpanFull(),

            Repeater::make('langue')
            ->schema([

                Select::make('langue')
                    ->options([
                        'Français' => 'Français',
                        'Anglais' => 'Anglais',
                        'Lingala' => 'Lingala',
                        'Swahili' => 'Swahili',
                        'Kikongo' => 'Kikongo',
                        'Tshiluba' => 'Tshiluba',

                    ])->native(false),
                Select::make('level')
                ->options([
                    'Debutant' => 'Debutant',
                    'Intermédiaire' => 'Intermédiaire',
                    'expert' => 'expert',
                ])->native(false),


            ])
                ->columns(2)
                ->columnSpanFull(),
            Repeater::make('diplome')
            ->schema([
                TextInput::make('diplome')->required(),
                TextInput::make('universite')->required(),
                TextInput::make('annee'),

            ])
                ->columns(3)
                ->columnSpanFull(),
            Repeater::make('certificat')
            ->schema([
                TextInput::make('certifier')->required(),
                TextInput::make('delivrer')->required(),
                TextInput::make('annee')
                ,

            ])
                ->columns(3)
                ->columnSpanFull(),
                Forms\Components\TextInput::make('site'),
                Forms\Components\Textarea::make('competences')
                    ->columnSpanFull(),

                Forms\Components\Textarea::make('comptes')
                    ->columnSpanFull(),
                Forms\Components\Textarea::make('sub_categorie')
                    ->columnSpanFull(),
                Forms\Components\Textarea::make('localisation')
                    ->columnSpanFull(),
                Forms\Components\TextInput::make('level')
                    ->required(),
                Forms\Components\TextInput::make('solde')
                    ->required()
                    ->numeric()
                    ->default(0),
                Forms\Components\Textarea::make('realisations')
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('user.name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('category.name')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('nom')
                    ->searchable(),
                Tables\Columns\TextColumn::make('prenom')
                    ->searchable(),
                Tables\Columns\TextColumn::make('identifiant')
                    ->searchable(),
                Tables\Columns\TextColumn::make('site')
                ->toggleable(isToggledHiddenByDefault: true)
                    ->searchable(),
                Tables\Columns\TextColumn::make('taux_journalier')
                    ->money('usd',true)
                ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                Tables\Columns\TextColumn::make('level')
                    ->searchable(),
                Tables\Columns\TextColumn::make('solde')
                    ->numeric()
                    ->sortable(),

            SelectColumn::make('status_compte')->options([
                'actif' => 'actif',
                'en_attente' => 'en_attente',
                'suspendu' => 'suspendu',
            ]),
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
    public static function getNavigationBadge(): ?string
    {
        return static::$model::count();
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListFreelances::route('/'),
            'create' => Pages\CreateFreelance::route('/create'),
            'view' => Pages\ViewFreelance::route('/{record}'),
            'edit' => Pages\EditFreelance::route('/{record}/edit'),
        ];
    }
}

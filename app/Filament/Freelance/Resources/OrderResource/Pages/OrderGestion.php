<?php

namespace App\Filament\Freelance\Resources\OrderResource\Pages;

use App\Filament\Freelance\Resources\OrderResource;
use App\Models\Order;
use Filament\Resources\Pages\Page;
use Filament\Resources\Pages\ViewRecord;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;

use Filament\Forms\Components\{DateTimePicker, TextInput, RichEditor, DatePicker, MarkdownEditor, Select, Toggle, FileUpload, Grid, Section};
use Filament\Resources\Pages\EditRecord;

class OrderGestion extends Page implements HasForms
{
    protected static string $resource = OrderResource::class;

    protected static string $view = 'filament.freelance.resources.order-resource.pages.order-gestion';



    public Order $record;
    public ?array $data = [];

    public function mount()
    {
        $this->form->fill([
            'progress'=>$this->record->progress,
            'etat'=> $this->record->feedback->etat,
            'delai_livraison_estimee'=> $this->record->feedback->delai_livraison_estimee
            ]);

    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make('3')->schema([
                    Select::make('etat')
                    ->options([
                        'En attente de traitement' => 'En attente de traitement',
                        'En cours de préparation' => 'En cours de préparation',
                        'En transit' => 'En transit',
                        'Livré' => 'Livré',
                    ])->required()->native(false),
                    DatePicker::make('delai_livraison_estimee')->required()->label('Delai de livrasion')->native(false),
                    Select::make('progress')
                    ->options([
                        0 => '0 %', '20' => '20 %', '30' => '30 %', '40' => '40 %', '50' => '50 %', '60' => '60 %', '70' => '70 %', '80' => '80 %', '90' => '90 %', '100' => '100 %',
                    ])->live(),
                ]),


            ])
            ->statePath('data')
            ->model($this->record);
    }

    public function submit()
    {

        $this->form->validate();
        try{


            $data = $this->form->getState();

            $this->record->update(['progress' => $data['progress']]);

            $feedback = $this->record->feedback;



            $feedback->update(['etat'=>$data['etat'], 'delai_livraison_estimee'=>$data['delai_livraison_estimee']]);
            $this->sendNotification();

        }catch(\Exception $e){

            Notification::make()
                ->danger()
                ->title($e->getMessage())
                ->send()
                ->sendToDatabase(auth()->user());

        }



       // dd($data['feedback']);
     }

    protected function sendNotification(): void
    {
        Notification::make()
            ->success()
            ->title(__('filament-breezy::default.profile.personal_info.notify'))
            ->send()
            ->sendToDatabase(auth()->user());
    }
}

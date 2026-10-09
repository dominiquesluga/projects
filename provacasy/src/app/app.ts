import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface Vacation {
  start: string;
  end: string;
  note: string;
}

@Component({
  imports: [FormsModule, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('provacasy');

  // Beispielnamen für die sechs Buttons in der Sidebar
  protected readonly sidebarButtons = [
    'Startseite',
    'Mein Kalender',
    'Kontakt',
    'Über mich',
    'Einstellungen',
    'Hilfe',
  ];

  // Der Kalender wird über den passenden Button geöffnet
  protected readonly calendarOpened = signal(false);
  protected readonly vacations = signal<Vacation[]>([]);
  protected readonly currentMonth = signal(new Date());
  protected vacationStart = '';
  protected vacationEnd = '';
  protected vacationNote = '';

  openCalendar(): void {
    this.calendarOpened.update((isOpen) => !isOpen);
  }

  // Monatsnavigation für die Kalenderansicht
  changeMonth(offset: number): void {
    this.currentMonth.update((month) => {
      return new Date(month.getFullYear(), month.getMonth() + offset, 1);
    });
  }

  // Erzeugt 42 Tage für eine vollständige Monatsansicht
  get calendarDays(): Date[] {
    const month = this.currentMonth();
    const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
    const start = new Date(firstDay);
    start.setDate(firstDay.getDate() - firstDay.getDay());

    return Array.from({ length: 42 }, (_, index) => {
      const date = new Date(start);
      date.setDate(start.getDate() + index);
      return date;
    });
  }

  // Prüft, ob ein Datum im Urlaub liegt
  hasVacation(date: Date): boolean {
    const dateKey = this.toDateKey(date);
    return this.vacations().some((vacation) =>
      dateKey >= vacation.start && dateKey <= vacation.end
    );
  }

  // Datum für die Kalenderanzeige formatieren
  toDateKey(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // Urlaub in den Kalender eintragen
  addVacation(): void {
    if (!this.vacationStart || !this.vacationEnd || !this.vacationNote.trim()) {
      return;
    }

    this.vacations.update((current) => [
      ...current,
      {
        start: this.vacationStart,
        end: this.vacationEnd,
        note: this.vacationNote.trim(),
      },
    ]);

    this.vacationStart = '';
    this.vacationEnd = '';
    this.vacationNote = '';
  }

  // CSV-Datei mit Urlauben importieren
  importVacations(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const rows = String(reader.result).split(/\r?\n/).slice(1);

      rows.forEach((row) => {
        const [start, end, note] = row.split(',');
        if (start && end && note) {
          this.vacations.update((current) => [
            ...current,
            { start, end, note },
          ]);
        }
      });
    };
    reader.readAsText(file);
  }

  // Urlaubsliste als CSV-Datei exportieren
  exportVacations(): void {
    const rows = ['Start,Ende,Notiz', ...this.vacations().map((item) =>
      `${item.start},${item.end},${item.note}`
    )];
    const content = rows.join('\n');
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'urlaub.csv';
    link.click();
    URL.revokeObjectURL(url);
  }
}

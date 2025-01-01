import { SettingsFields } from "../features/start/components/Home";
import { TaxTableRow } from "../features/start/types/Table";

export class TaxCalculator {
    PBB: number = 58800;

    XXGRUB2: number = 0.423;
    XXGRUA2: number = 0.99;
    XXGRUA3: number = 2.72;
    XXGRUB3: number = 0.225;
    XXGRUC3: number = 0.2;
    XXGRUA4: number = 3.11;
    XXGRUB4: number = 0.77;
    XXGRUA5: number = 7.88;
    XXGRUB5: number = 1.081;
    XXGRUC5: number = -0.1;
    XXGRUB6: number = 0.293;
  
    constructor(settings: SettingsFields) {
        this.PBB = settings.PBB
        this.XXGRUB2 = settings.XXGRUB2
        this.XXGRUA2 = settings.XXGRUA2
        this.XXGRUA3 = settings.XXGRUA3
        this.XXGRUB3 = settings.XXGRUB3
        this.XXGRUC3 = settings.XXGRUC3
        this.XXGRUA4 = settings.XXGRUA4
        this.XXGRUB4 = settings.XXGRUB4
        this.XXGRUA5 = settings.XXGRUA5
        this.XXGRUB5 = settings.XXGRUB5
        this.XXGRUC5 = settings.XXGRUC5
        this.XXGRUB6 = settings.XXGRUB6
    }
  
    calculateAga(wage: number, interval: number, amount: number): TaxTableRow[] {
      const result = Array.from({length: 3000}).map((_, index) => {
          return this.aga(wage+(interval*index))
      })

      const table: TaxTableRow[] = result.slice(0, amount).map((value, index) => {
        return new TaxTableRow(wage+(interval*index), 0, value, 21590, 0, 12371, 200)
      })
      return table
    }

    private roundUpToNearest100(value: number): number {
        return Math.ceil(value / 100) * 100;
    }

    private aga(wage: number): number {
      let result: number;
    
      if (wage <= this.XXGRUB2 * this.PBB) {
        result = wage;
      } else if (wage <= this.XXGRUA2 * this.PBB) {
        result = this.XXGRUB2 * this.PBB;
      } else if (wage <= this.XXGRUA3 * this.PBB) {
        result = this.XXGRUB3 * this.PBB + this.XXGRUC3 * wage;
      } else if (wage <= this.XXGRUA4 * this.PBB) {
        result = this.XXGRUB4 * this.PBB;
      } else if (wage <= this.XXGRUA5 * this.PBB) {
        result = this.XXGRUB5 * this.PBB + this.XXGRUC5 * wage;
      } else {
        result = this.XXGRUB6 * this.PBB;
      }
  
      if (result > wage) {
        result = wage;
      }
  
      return this.roundUpToNearest100(result);
    }

    private aga6524P(wage: number): number {
        let result: number;
    
        if (wage <= 0.99 * this.PBB) {
          result = 0.99 * this.PBB;
        } else if (wage <= 1.11 * this.PBB) {
          result = 1.11 * this.PBB;
        } else if (wage <= 1.965 * this.PBB) {
          result = 0.825 * this.PBB + 0.257 * wage;
        } else if (wage <= 3.11 * this.PBB) {
          result = 0.558 * this.PBB + 0.3949 * wage;
        } else if (wage <= 3.24 * this.PBB) {
          result = 0.558 * this.PBB + 0.3949 * wage;
        } else if (wage <= 5 * this.PBB) {
          result = 1.289 * this.PBB + 0.1693 * wage;
        } else if (wage <= 7.88 * this.PBB) {
          result = 1.381 * this.PBB + 0.1513 * wage;
        } else if (wage <= 8.08 * this.PBB) {
          result = 1.279 * this.PBB + 0.1643 * wage;
        } else if (wage <= 10.74 * this.PBB) {
          result = 2.606 * this.PBB;
        } else if (wage <= 12.16 * this.PBB) {
          result = 9.265 * this.PBB - 0.62 * wage;
        } else if (wage <= 13.54 * this.PBB) {
          result = 1.723 * this.PBB;
        } else if (wage <= 38.42 * this.PBB) {
          result = 2.499 * this.PBB - 0.0574 * wage;
        } else {
          result = 0.293 * this.PBB;
        }
    
        if (result > wage) {
          result = wage;
        }
    
        return this.roundUpToNearest100(result);;
      }
    
  }
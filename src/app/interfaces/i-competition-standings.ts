
export interface ICompetitionStandings {
    competition: {
        area: {
            id: number;
            name: string;
        }
        code: string;
        id: number;
        lastUpdated: string;
        name: string;
        plan: string;
    };
    filters: {};
    season: {
        currentMatchday: number;
        endDate: string;
        id: number;
        startDate: number;
        winner: any;
    };
    standings: [{
        0: {
            group: any;
            stage: string;
            table: [{
                0: {
                    draw: number;
                    goalDifference: number;
                    goalsAgainst: number;
                    goalsFor: number;
                    lost: number;
                    playedGames: number;
                    points: number
                    position: number
                    team: {
                        id: number;
                        name: string;
                        crestUrl: string;
                    }
                    won: number;
                }
            }];
            type: string;
        };
    }];
}

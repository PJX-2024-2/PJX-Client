export type Feel= {
    kakaoId: number;
    date: string;
    reactionType: string
};

export type FeelList = {
    kakaoId: number;
    month: string;
}

export type DayPaid = {
    kakaoId: number;
    date: string;
}

export type MothGoal = {
    kakaoId: number;
    newGoal: number;
}
interface User {
    id?: string;
    name?: string;
    username?: string;
    email?: string;
    image_url: string;
    verified: boolean | false;
    total_trips: number | 0;
    travel_days: number | 0;
    connections: number | 0;
    member_since: string | "";
    interests: string[] | [];
    languages: string[] | [];
    website: string | "";
    certifications: string[] | [];
    bio: string | "";
    about: string | "";
    location: string | "";
    phone: string | "";
}
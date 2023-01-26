
interface TitleBannerProps {
    listDisplayed: boolean;
}

export const TitleBanner = function({listDisplayed}: TitleBannerProps) {
    return (
        <h1 className={listDisplayed ? "title-banner-list-displayed" : "title-banner"}>Quote Search</h1>
    );
}
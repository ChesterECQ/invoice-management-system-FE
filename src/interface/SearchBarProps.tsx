export default interface SearchBarProps {
    handleSearchTerm?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    searchTerm?: string;
    handleButtonClick : () => void
}
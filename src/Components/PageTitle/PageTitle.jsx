
const PageTitle = ({tName,tName2,tName3}) => {
    return (
        <div className="flex items-center gap-5">
            <p className="text-xs ">{tName}</p> {'>'}
            <p className="text-xs ">{tName2}</p>{'>'}
            <p className="text-xs ">{tName3}</p>
        </div>
    );
};

export default PageTitle;
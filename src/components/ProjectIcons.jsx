export function ProjectIcons({projectIcons}){
    return (
        <>
            <p data-tooltip={projectIcons.tooltip} className='py-4 text-md font-bold text-center'>
                Stack:
            </p>
            <div className='flex justify-around '>
                {projectIcons.map((icon) => (
                <img
                    key={icon.img}
                    data-tooltip={icon.tooltip}
                    className={`shadow-md ${icon.style} image-test`}
                    src={icon.img}
                    alt="stack"
                    title={icon.tooltip}
                />
                ))}
            </div>
        </>
    )
}

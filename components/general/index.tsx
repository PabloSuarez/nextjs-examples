import styles from '/styles/global.module.css';

type PProps = {
    className?: string,
    rest?: Object,
    children?: React.ReactNode
};
const P = ({ className, children, rest }: PProps) => {
    return (
        <p className={`${styles.description} ${className}`} {...rest}>
            {children}
        </p>
    )
}


type MainTitleProps = {
    className?: string,
    children?: React.ReactNode
};
const MainTitle = ({ children, className }: MainTitleProps) => {
    return <h1 className={`${styles.title} ${className}`}>{children}</h1>;
};


type CodeProps = {
    children?: React.ReactNode
};
const Code = ({ children }: CodeProps) => {
    return <code className={styles.code}>{children}</code>;
};


type ContainerProps = {
    className?: string,
    children?: React.ReactNode
};
const Container = ({ children, className }: ContainerProps) => {
    return <div className={className}>{children}</div>;
};


type MainContainerProps = {
    className?: string,
    children?: React.ReactNode
};
const MainContainer = ({ children, className }: MainContainerProps) => {
    return <main className={`${styles.main} ${className}`}>{children}</main>;
};


type GridContainerProps = {
    className?: string,
    children?: React.ReactNode,
    align?: string
};
const GridContainer = ({ children, className }: GridContainerProps) => {
    return <div className={`${styles.grid} ${className}`}>{children}</div>
};

export { P, MainTitle, Code, Container, MainContainer, GridContainer };
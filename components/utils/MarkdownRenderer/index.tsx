import Link from "next/link";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';
import { URL_PATH } from "../../../data/urlPath";
import markdownRendererStyles from "./MarkdownRenderer.module.scss";

const MarkdownRenderer = ({ rawMarkdown }: { rawMarkdown: string; }) => {
    const [styleManager, setStyleManager] = useState(undefined);

    useEffect(() => {
        import('react-syntax-highlighter/dist/esm/styles/prism')
            .then(theme => {
                setStyleManager(theme.materialOceanic);
            });
    });

    return (
        <div className={markdownRendererStyles.markdown_container}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');

                        if (!inline && match) {
                            return (
                                <SyntaxHighlighter
                                    style={styleManager}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            );
                        } else {
                            return (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        }
                    },
                    a({ node, className, children, ...props }) {
                        if (props.href?.startsWith("/")) {
                            return (
                                <Link href={props.href}>
                                    <a className={className}>
                                        {children}
                                    </a>
                                </Link>
                            );
                        } else if (props.href?.startsWith("%3E")) {
                            const _href = props.href?.substring(3);
                            const [func, parameter] = _href.split("#");
                            const parsedUrl = URL_PATH[func as ("projectsDetailView" | "blogsDetailView")](parameter);

                            return (
                                <Link href={parsedUrl}>
                                    <a className={className}>
                                        {children}
                                    </a>
                                </Link>
                            );
                        } else {
                            return (
                                <a className={className} target="_blank" {...props}>
                                    {children}
                                </a>
                            );
                        }
                    }
                }}
            >{rawMarkdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;
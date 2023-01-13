import styled from 'styled-components';

export const QualitySymbol = styled.div`
    border: 2px solid ${p => p.color};
    font-size: 8px;
    height: 8px;
    width: 8px;
    padding: 4px;
    border-radius: 100%;
    color: ${p => p.color};
`;

export const Container = styled.div`
    text-align: left;
    width: fit-content;
`;

export const Header = styled.div`
    background-color: ${p => p.color};
    padding: 10px 16px;
    color: white;
    text-transform: uppercase;
    &::before {
        content: '';
        display: inline-block;
        width: 12px;
        height: 12px;
        -moz-border-radius: 100%;
        -webkit-border-radius: 100%;
        border-radius: 100%;
        border: 3px solid white;
        margin-right: 24px;
        vertical-align: -2px;
    }
    ${QualitySymbol}{
        float: right;
        text-align: center;
    }
`;

export const Table = styled.table`
    background-color: #d8d4d4;
    th, td{
        padding: 10px 16px;
    }
    td{
        text-align: center;
    }
    td:first-child { 
        text-align: left;
    };   
`;

export const Bottom = styled.div`
    padding: 10px 16px;
    background-color: #e8e4e4;
    text-align: center;
`;


<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"	xmlns="http://www.w3.org/1999/xhtml" xmlns:html="http://www.w3.org/TR/REC-html40"	xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"	xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <xsl:variable name="fileType">
      <xsl:choose>
        <xsl:when test="//sitemap:url">Sitemap</xsl:when>
        <xsl:otherwise>SitemapIndex</xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>
          <xsl:choose>
            <xsl:when test="$fileType='Sitemap'">Sitemap - Notiflix</xsl:when>
            <xsl:otherwise>Sitemap Index - Notiflix</xsl:otherwise>
          </xsl:choose>
        </title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
          margin: 0;
          font-family: sans-serif;
          font-size: 15px;
          color: #1e1e1e;
          }
          .notiflix-sitemap-header {
          background: #32c682;
          padding: 10px 20px;
          }
          .notiflix-sitemap-header h1 {
          color: #1e1e1e;
          font-size: 20px;
          line-height: 24px;
          margin: 10px 0;
          }
          .notiflix-sitemap-header p,
          .notiflix-sitemap-header a {
          transition: all 0.25s ease-in-out;
          color: #1e1e1e;
          margin: 8px 0;
          font-size: 13px;
          line-height: 16px;
          }
          .notiflix-sitemap-header a:hover {
          color: #1e1e1e;
          }
          table {
          margin: 20px 30px;
          border: none;
          font-size: 15px;
          width: calc(100% - 60px);
          border-collapse: collapse;
          }
          th {
          border-bottom: 1px solid #ccc;
          text-align: left;
          padding: 10px 5px;
          font-size: 14px;
          }
          td {
          font-size: 14px;
          padding: 10px 5px;
          border-left: 3px solid #fff;
          }
          tr.second {
          background: #f7f7f7;
          }
          table td a {
          position: relative;
          transition: all .25s ease-in-out;
          color: #1e1e1e;
          text-decoration: none;
          display: inline-block;
          }
          table td a:before {
          content: "";
          transition: inherit;
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          border-bottom: 2px solid #32c682;
          }
          table td a:hover {
          color: #1e1e1e;
          }
          table td a:hover:before {
          width: 100%;
          }
          table td a img {
          max-height: 30px;
          margin: 6px 3px;
          }
        </style>
      </head>
      <body>
        <div class="notiflix-sitemap-header">
          <h1>XML Sitemap</h1>
          <p>Generated by <a target="_blank" href="https://notiflix.github.io">Notiflix</a></p>
          <p>You can find more information about XML sitemaps at <a href="http://sitemaps.org">sitemaps.org</a></p>
          <p>
            <xsl:choose>
              <xsl:when test="$fileType='Sitemap'">This sitemap contains <xsl:value-of select="count(sitemap:urlset/sitemap:url)"></xsl:value-of> URLs.</xsl:when>
              <xsl:otherwise>This Index contains <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"></xsl:value-of> sitemaps.</xsl:otherwise>
            </xsl:choose>
          </p>
        </div>
        <xsl:choose>
          <xsl:when test="$fileType='Sitemap'">
            <xsl:call-template name="sitemapTable"/>
          </xsl:when>
          <xsl:otherwise>
            <xsl:call-template name="siteindexTable"/>
          </xsl:otherwise>
        </xsl:choose>
      </body>
    </html>
  </xsl:template>
  <xsl:template name="siteindexTable">
    <table cellpadding="3">
      <thead>
        <tr>
          <th width="50%">URL</th>
          <th>LastChange</th>
        </tr>
      </thead>
      <tbody>
        <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
        <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
        <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
          <tr>
            <xsl:if test="position() mod 2 != 1">
              <xsl:attribute name="class">second</xsl:attribute>
            </xsl:if>
            <td>
              <xsl:variable name="itemURL">
                <xsl:value-of select="sitemap:loc"/>
              </xsl:variable>
              <a href="{$itemURL}">
                <xsl:value-of select="sitemap:loc"/>
              </a>
            </td>
            <td>
              <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
            </td>
          </tr>
        </xsl:for-each>
      </tbody>
    </table>
  </xsl:template>
  <xsl:template name="sitemapTable">
    <table cellpadding="3">
      <thead>
        <tr>
          <th width="50%">URL</th>
          <th>Images</th>
          <th>Priority</th>
          <th>Change Frequency</th>
          <th>Last Change</th>
        </tr>
      </thead>
      <tbody>
        <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
        <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
        <xsl:for-each select="sitemap:urlset/sitemap:url">
          <tr>
            <xsl:if test="position() mod 2 != 1">
              <xsl:attribute name="class">second</xsl:attribute>
            </xsl:if>
            <td>
              <xsl:variable name="itemURL">
                <xsl:value-of select="sitemap:loc"/>
              </xsl:variable>
              <a href="{$itemURL}">
                <xsl:value-of select="sitemap:loc"/>
              </a>
              <xsl:for-each select="video:video">
                <xsl:variable name="thumbURL">
                  <xsl:value-of select="video:thumbnail_loc"/>
                </xsl:variable>
                <xsl:variable name="playURL">
                  <xsl:value-of select="video:player_loc"/>
                </xsl:variable>
                <xsl:if test="$thumbURL != ''">
                  <a href="{$playURL}">
                    <img src="{$thumbURL}" style="max-width:60px;float:right;"/>
                  </a>
                </xsl:if>
              </xsl:for-each>
            </td>
            <td>
              <xsl:value-of select="count(image:image)"/>
            </td>
            <td>
              <xsl:if test="string(number(sitemap:priority))!='NaN'">
                <xsl:value-of select="concat(sitemap:priority*100,'%')"/>
              </xsl:if>
            </td>
            <td>
              <xsl:value-of select="concat(translate(substring(sitemap:changefreq, 1, 1),concat($lower, $upper),concat($upper, $lower)),substring(sitemap:changefreq, 2))"/>
            </td>
            <td>
              <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
            </td>
          </tr>
        </xsl:for-each>
      </tbody>
    </table>
  </xsl:template>
</xsl:stylesheet>

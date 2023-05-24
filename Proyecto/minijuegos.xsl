<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <style type="text/css">
          h1 {
            color: red; 
          }
          h2 {
            color: blue; 
          }
          h3 {
          color: green;
          }
        </style>
      </head>
      <body>
        <h1><xsl:value-of select="minijuegos/titulo"/></h1>
        <p>Autor: <xsl:value-of select="minijuegos/autor"/></p>
        <h2>Juegos:</h2>
        <xsl:for-each select="minijuegos/juego">
          <h3><xsl:value-of select="nombre"/></h3>
          <p><xsl:value-of select="descripcion"/></p>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

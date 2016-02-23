	  Diff2Html.prototype.getJsonFromDiff = function(diffInput, config) {
	    var configOrEmpty = config || {};
	    return diffParser.generateDiffJson(diffInput, configOrEmpty);
	      diffJson = diffParser.generateDiffJson(diffInput, configOrEmpty);
	  DiffParser.prototype.generateDiffJson = function(diffInput, config) {
	    var copyFrom = /^copy from "?(.+?)"?/;
	    var copyTo = /^copy to "?(.+?)"?/;
	    var renameFrom = /^rename from "?(.+?)"?/;
	    var renameTo = /^rename to "?(.+?)"?/;
	      } else if (currentFile && !currentFile.oldName && (values = getSrcFilename(line, config))) {
	      } else if (currentFile && !currentFile.newName && (values = getDstFilename(line, config))) {
	  function getSrcFilename(line, cfg) {
	    var prefixes = ["a\\/", "i\\/", "w\\/", "c\\/", "o\\/"];

	    if (cfg.srcPrefix) prefixes.push(cfg.srcPrefix);

	    return _getFilename('---', line, prefixes);
	  }

	  function getDstFilename(line, cfg) {
	    var prefixes = ["b\\/", "i\\/", "w\\/", "c\\/", "o\\/"];

	    if (cfg.dstPrefix) prefixes.push(cfg.dstPrefix);

	    return _getFilename('\\+\\+\\+', line, prefixes);
	  }

	  function _getFilename(linePrefix, line, prefixes) {
	    var prefixesStr = prefixes.join("|");
	    return new RegExp('^' + linePrefix + ' "?(?:' + prefixesStr + ')(.+?)"?$').exec(line);
	  }

	      '     <div class="d2h-file-list-header">\n' +
	      '         <span class="d2h-file-list-title">Files changed (' + diffFiles.length + ')&nbsp&nbsp</span>\n' +
	      '         <a class="d2h-file-switch d2h-hide">hide</a>\n' +
	      '         <a class="d2h-file-switch d2h-show">show</a>\n' +
	      '     </div>\n' +
	          '       <td class="d2h-file-name-wrapper">\n' +
	          '         <a href="#' + printerUtils.getHtmlId(file) + '" class="d2h-file-name">' +
	          '&nbsp;' + printerUtils.getDiffName(file) +
	          '         </a>\n' +
	          '       </td>\n' +
	      '       <span class="d2h-file-stats">\n' +
	      '         <span class="d2h-lines-added">\n' +
	      '         <span class="d2h-lines-deleted">\n' +
	      '       </span>\n' +
	      '       <span class="d2h-file-name-wrapper">\n' +
	      '         <span class="d2h-file-name">' + printerUtils.getDiffName(file) + '</span>\n' +
	      '       </span>\n' +